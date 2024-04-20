import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";

describe("Fetch anime from API", () => {
	let response = 0;
	let body = [];

	beforeAll(async () => {
		response = await fetch(
			"https://api.jikan.moe/v4/top/anime?filter=bypopularity"
		);
		body = await response.json();
	});

	it("Should have status 200", () => {
		expect(response.status).toBe(200);
	});

	it("should have content-type of json", () => {
		expect(response.headers.get("Content-Type")).toBe("application/json");
	});

	it("Should have array body", () => {
		expectTypeOf(body).toBeArray();
	});
});
