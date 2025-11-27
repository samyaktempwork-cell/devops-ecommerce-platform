const request = require("supertest");
const app = require("../server");

describe("Product API Integration Tests", () => {

  test("GET /products should return product list", async () => {
    const res = await request(app).get("/products");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("GET /products/1 should return product details", async () => {
    const res = await request(app).get("/products/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    expect(res.body).toHaveProperty("name");
  });

  test("GET /products/999 should return 404", async () => {
    const res = await request(app).get("/products/999");

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "Product not found");
  });

});
