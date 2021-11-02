export class Blog {
    _id: string;
    title: string;
    image: string;
    excerpt: string;
    description: string;
    publishedDate: number;
  
    constructor(
      _id: string,
      title: string,
      excerpt: string,
      description: string,
      image: string,
      publishedDate: number,
    ) {
      this._id = _id;
      this.title = title;
      this.excerpt = excerpt;
      this.image = image;
      this.description = description;
      this.publishedDate = publishedDate;
    }
}
