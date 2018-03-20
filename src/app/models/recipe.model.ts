import { Item } from './item.model';

export class Recipe {
    name: string;
    items: Item[];
    timestamp: Date;
    link: string;
}
