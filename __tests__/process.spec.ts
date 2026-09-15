import { getNextFocusableId } from "contexts/process";

describe("getNextFocusableId", () => {
  test("returns empty string when stack order is not initialized", () => {
    expect(getNextFocusableId("window-1", undefined, {})).toBe("");
  });

  test("skips the current window and minimized windows", () => {
    expect(
      getNextFocusableId("window-1", ["window-1", "window-2", "window-3"], {
        "window-1": { minimized: false },
        "window-2": { minimized: true },
        "window-3": { minimized: false },
      })
    ).toBe("window-3");
  });
});
