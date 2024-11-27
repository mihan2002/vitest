// tests/user.test.js
import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import app from "../app.js";
import { resetProducts } from "../models/productModel.js";

describe("User API", () => {
  beforeEach(() => {
    resetProducts();
  });

  it("should create a new product", async () => {
    const res = await request(app).post("/api/products").send({
      productName: "test product",
      price: 100,
      stock: 10,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      id: 1,
      productName: "test product",
      price: 100,
      stock: 10,
    });
  });

  it("should fetch all the products", async () => {
    await request(app).post("/api/products").send({
      productName: "test product",
      price: 100,
      stock: 10,
    });

    const res = await request(app).get("/api/products");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it("should fetch a product by ID", async () => {
    await request(app).post("/api/products").send({
      productName: "test product",
      price: 100,
      stock: 10,
    });
    const res = await request(app).get("/api/products/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("productName", "test product");
  });

  it("should update a product by ID", async () => {
    await request(app).post("/api/products").send({
      productName: "test product",
      price: 100,
      stock: 10,
    });
    const res = await request(app).put("/api/products/1").send({
      productName: "test product",
      price: 100,
      stock: 8,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      productName: "test product",
      price: 100,
      stock: 8,
    });
  });

  it("should delete a product by ID", async () => {
    await request(app).post("/api/products").send({
      productName: "test product",
      price: 100,
      stock: 10,
    });
    const res = await request(app).delete("/api/products/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);

    const getRes = await request(app).get("/api/products/1");
    expect(getRes.statusCode).toBe(404)
});
});
