import { Request, Response } from 'express';
import { GetMangaListUseCase } from '@/application/use-cases/get-manga-list.use-case';
import { GetMangaByIdUseCase } from '@/application/use-cases/get-manga-by-id.use-case';
import { GetChapterImagesUseCase } from '@/application/use-cases/get-chapter-images.use-case';
import { MangadexRepository } from '@/infrastructure/repositories/mangadex.repository';
import { GetMangaByTitleUseCase } from '@/application/use-cases/get-manga-by-title.use-case';

export class MangaController {
  private getMangaListUseCase: GetMangaListUseCase;
  private getMangaByIdUseCase: GetMangaByIdUseCase;
  private getMangaByTitleUseCase: GetMangaByTitleUseCase;
  private getChapterImagesUseCase: GetChapterImagesUseCase;

  constructor() {
    const mangaRepository = new MangadexRepository();
    this.getMangaListUseCase = new GetMangaListUseCase(mangaRepository);
    this.getMangaByIdUseCase = new GetMangaByIdUseCase(mangaRepository);
    this.getMangaByTitleUseCase = new GetMangaByTitleUseCase(mangaRepository);
    this.getChapterImagesUseCase = new GetChapterImagesUseCase(mangaRepository);
  }

  public mangaList = async (req: Request, res: Response) => {
    try {
      const mangaStructure = await this.getMangaListUseCase.execute();
      res.status(200).json(mangaStructure);
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching manga list');
    }
  };

  public mangaById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const mangaStructure = await this.getMangaByIdUseCase.execute(id);
      res.status(200).json(mangaStructure);
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching manga by id');
    }
  };

  public mangaByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;

    try {
      const mangaStructure = await this.getMangaByTitleUseCase.execute(title);
      res.status(200).json(mangaStructure);
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching manga by title');
    }
  };

  public imagesByChapterId = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const chapterImages = await this.getChapterImagesUseCase.execute(id);
      res.status(200).json(chapterImages);
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching chapter images');
    }
  };
}
