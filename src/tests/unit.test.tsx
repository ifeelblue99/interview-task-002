import {
  getPostChannelIcon,
  convertStatusInTOString,
  E_PostChannel,
} from "../components/feed-card/FeedCard";
import objectToMap from "../utils/objectToMap";
import handleImageLoadError from "../utils/handleImageLoadError";
import detectLinksInText from "../utils/detectLinksInText";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("detectLinksInText()", () => {
  it("detect link in a text and turn it into anchor tag", () => {
    const { container } = render(<span data-testid="linktest">{detectLinksInText("hello http://bit.ly/145HD7S")}</span>)
    const link = container.querySelector("a")

    expect(link).toBeTruthy()
    expect(link?.getAttribute("href")).toBe("http://bit.ly/145HD7S")

  })
})

describe("handleImageLoadError()", () => {
  it("should handle error by replacing image src to no-post-image.png", async () => {
    await render(<img data-testid="test-image" src="error" onError={handleImageLoadError} />);

    const image = screen.getByTestId("test-image")

    // FIX HERE
    //expect(image.getAttribute("src")).toBe("src/task-assets/no-post-image.png")

  })
})


describe("objectToMap()", () => {
  it("should convert object to map", () => {
    const myObj = {
      id1: { color: "red" },
      id3: { color: "blue", year: 2022 },
    };
    const map = objectToMap(myObj);
    expect(map.get("id1").color).toBe("red");
    expect(map.get("id3").year).toBe(2022);
  });
});

describe("convertStatusInTOString()", () => {
  it("should convert status code into color string", () => {
    expect(convertStatusInTOString(0)).toBe("orange");
    expect(convertStatusInTOString(99)).toBe("red");
  });
});

describe("getPostChannelIcon()", () => {
  it("should return channel icons path", () => {
    expect(getPostChannelIcon(E_PostChannel.Facebook)).toBe(
      "src/assets/channels/facebook.png"
    );
    expect(getPostChannelIcon(E_PostChannel.Twitter)).toBe(
      "src/assets/channels/twitter.png"
    );
  });
  it("should return no-image-path.png fas default", () => {
    expect(getPostChannelIcon(E_PostChannel.TikTok)).toBe(
      "src/task-assets/no-post-image.png"
    );
  });
})
