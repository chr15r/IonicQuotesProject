import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favrouriteQuotes: Quote[] = [];

    addQuoteToFavourites(quote: Quote) {
        this.favrouriteQuotes.push(quote);
        console.log(this.favrouriteQuotes);
    }

    removeQuoteFromFavourites(quote: Quote) {
        const position = this.favrouriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        })
        this.favrouriteQuotes.splice(position, 1);
    }

    getFavouriteQuotes() {
        return this.favrouriteQuotes.slice(); // Return copy of the array
    }

    isQuoteFavourite(quote: Quote) {
        return this.favrouriteQuotes.find((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
    }

}