export class Blog {
    _id: string;
<<<<<<< HEAD
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
=======
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
>>>>>>> 99deb4f9e1c07372bc40cb5ef50bdda459ad2b98
      this.excerpt = excerpt;
      this.image = image;
      this.description = description;
      this.publishedDate = publishedDate;
    }
}
