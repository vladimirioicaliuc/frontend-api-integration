import { generateOrderPayload, totalCostOfCart, totalNumberOfItems } from "./../../src/utils/shoppingCart";

const mockShoppingItems = [
  {
    product: {
      id: "id1",
      title: "product 1",
      price: 10,
      imageUrl: "imageURL1",
    },
    quantity: 2,
  },
  {
    product: {
      id: "id2",
      title: "product 2",
      price: 3,
      imageUrl: "imageURL2",
    },
    quantity: 1,
  },
  {
    product: {
      id: "id3",
      title: "product 3",
      price: 5,
      imageUrl: "imageURL3",
    },
    quantity: 1,
  },
];

describe("Utils / shopping cart", () => {
  describe("generateOrderPayload", () => {
    it("should return to correct payload when the shopping items is not passed", () => {
      const response = generateOrderPayload();
      expect(response).toEqual([]);
    });

    it("should return to correct payload when the shopping items is empty", () => {
      const response = generateOrderPayload([]);
      expect(response).toEqual([]);
    });

    it("should return to correct payload format when the shopping items has data", () => {
      const response = generateOrderPayload(mockShoppingItems);

      // console.log(response);
      expect(response).toEqual([
        { itemId: "id1", pricePerItem: 10, quantity: 2 },
        { itemId: "id2", pricePerItem: 3, quantity: 1 },
        { itemId: "id3", pricePerItem: 5, quantity: 1 },
      ]);
    });
  });

  describe("totalCostOfCart", () => {
    it("should return 0 if there is no shopping items passed", () => {
      const response = totalCostOfCart();
      expect(response).toEqual(0);
    });

    it("should return 0 when the shopping items are empty", () => {
      const response = totalCostOfCart([]);
      expect(response).toEqual(0);
    });

    it("should return the total when the shopping items have data", () => {
      const response = totalCostOfCart(mockShoppingItems);
      expect(response).toEqual(28);
    });
  });

  describe("totalNumberOfItems", () => {
    it("should return 0 if there is no shopping items passed", () => {
      const response = totalNumberOfItems();
      expect(response).toEqual(0);
    });

    it("should return 0 when the shopping items are empty", () => {
      const response = totalNumberOfItems([]);
      expect(response).toEqual(0);
    });

    it("should return the number of items when the shopping items have data and taking quantity into consideration", () => {
      const response = totalNumberOfItems(mockShoppingItems);
      expect(response).toEqual(4);
    });
  });
});
