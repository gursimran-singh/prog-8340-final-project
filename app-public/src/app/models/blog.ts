export class Blog {
    _id: string;
    title: string;
    author:string;
    image: string;
    excerpt: string;
    description: string;
    publishedDate: string;

    constructor(
      _id: string,
      title: string,
      author:string,
      excerpt: string,
      description: string,
      image: string,
      publishedDate: string,
    ) {
      this._id = _id;
      this.title = title;
      this.author= author;
      this.excerpt = excerpt;
      this.image = image;
      this.description = description;
      this.publishedDate = publishedDate;
    }
}
