export class News {
    _id: number;
    title: string;
    description: string;
    image: string;
    publishDate: Date;
    category: string;
  
    constructor(id: number, title: string, description = '', completed = false, publishDate = new Date(), image = '', category = '') {
      this._id = id
      this.title = title
      this.description = description
      this.image = image
      this.publishDate = publishDate
      this.category = category
    }
  }