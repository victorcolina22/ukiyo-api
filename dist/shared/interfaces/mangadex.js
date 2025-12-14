"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipType = exports.TagType = exports.Group = exports.Status = exports.State = exports.OriginalLanguage = exports.ContentRating = void 0;
var ContentRating;
(function (ContentRating) {
    ContentRating["Safe"] = "safe";
    ContentRating["Suggestive"] = "suggestive";
})(ContentRating || (exports.ContentRating = ContentRating = {}));
var OriginalLanguage;
(function (OriginalLanguage) {
    OriginalLanguage["En"] = "en";
    OriginalLanguage["Ja"] = "ja";
    OriginalLanguage["Zh"] = "zh";
})(OriginalLanguage || (exports.OriginalLanguage = OriginalLanguage = {}));
var State;
(function (State) {
    State["Published"] = "published";
})(State || (exports.State = State = {}));
var Status;
(function (Status) {
    Status["Completed"] = "completed";
    Status["Ongoing"] = "ongoing";
})(Status || (exports.Status = Status = {}));
var Group;
(function (Group) {
    Group["Format"] = "format";
    Group["Genre"] = "genre";
    Group["Theme"] = "theme";
})(Group || (exports.Group = Group = {}));
var TagType;
(function (TagType) {
    TagType["Tag"] = "tag";
})(TagType || (exports.TagType = TagType = {}));
var RelationshipType;
(function (RelationshipType) {
    RelationshipType["Artist"] = "artist";
    RelationshipType["Author"] = "author";
    RelationshipType["CoverArt"] = "cover_art";
    RelationshipType["Creator"] = "creator";
    RelationshipType["Manga"] = "manga";
})(RelationshipType || (exports.RelationshipType = RelationshipType = {}));
