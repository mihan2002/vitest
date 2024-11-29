import { describe, vi, it, expect } from "vitest";
import User from "../models/userModel";
import { createUser } from "../controllers/userController";
import { json } from "express";

vi.mock("../models/userModel", async () => {
  return {
    default: {
      create: vi.fn(),
    },
  };
});

describe("user Testing", () => {
  it("should create a user", async () => {
    const req = {
      body: {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
      },
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    User.create.mockResolvedValue({
      id: 1,
      ...req.body,
    });

    await createUser(req, res);

    expect(User.create).toHaveBeenCalledTimes(1);
    expect(User.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenLastCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      ...req.body,
    });
  });
});
