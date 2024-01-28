
    export interface IRestaurant {
        id: number,
        name: string;
        chef: string;
        chefName: string;
        rating: number;
        image: string;
        minHeight?: number;
      }
      
      export interface IDish {
        id: number,
        name: string;
        description: string;
        image: string;
        tags: string[];
        price: string;
        minHeight?: number;
      }

      export interface IChef {
        id: string;
        name: string;
        image: string;
        description: string;
      }