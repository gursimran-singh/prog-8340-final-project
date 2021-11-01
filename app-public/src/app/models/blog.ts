export class Blog {
    _id: string;
    name: string;
    image: string;
    excerpt: string;
    description: string;
    publishedDate: number;
  
    constructor(
      _id: string,
      name: string,
      excerpt: string,
      description: string,
      image: string,
      publishedDate: number,
    ) {
      this._id = _id;
      this.name = name;
      this.excerpt = excerpt;
      this.image = image;
      this.description = description;
      this.publishedDate = publishedDate;
    }
}
