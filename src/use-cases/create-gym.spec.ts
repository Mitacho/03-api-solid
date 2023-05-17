import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { CreateGymUseCase } from "./create-gym";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe("Create gym use case", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });

  it("should be able to craete gym", async () => {
    const { gym } = await sut.execute({
      title: "JavaScript Gym",
      phone: null,
      description: null,
      latitude: -22.7661764,
      longitude: -47.3285686,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
