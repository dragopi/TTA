import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { CardItem, CardItemToken, FilterAge, FilterLeaders, FilterTactics, FilterWonder, SceneResult, FilterGovernament, FilterYellowTokens, TacticResult } from './TTAUI';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<CardItemToken code="PFA01" />, container);
    });
    expect(container.textContent).toContain("Agriculture");

    const hiddenValue = document.querySelector("[name=PFA01_tk]");
    expect(hiddenValue).toHaveAttribute("value", "0");

    const linkAdd = document.querySelector("[id=PFA01_add]");
    expect(linkAdd.innerHTML).toBe("<i class=\"bi bi-file-plus\"></i>");

    act(() => {
        linkAdd.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(hiddenValue).toHaveAttribute("value", "1");

    act(() => {
        for (let i = 0; i < 5; i++) {
            linkAdd.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            jest.advanceTimersByTime(100);
        }
    });
    expect(hiddenValue).toHaveAttribute("value", "6");

    const linkRemove = document.querySelector("[id=PFA01_rmv]");
    expect(linkRemove.innerHTML).toBe("<i class=\"bi bi-file-minus\"></i>");

    act(() => {
        linkRemove.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(hiddenValue).toHaveAttribute("value", "5");

    act(() => {
        for (let i = 0; i < 10; i++) {
            linkRemove.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            jest.advanceTimersByTime(100);
        }
    });
    expect(hiddenValue).toHaveAttribute("value", "0");

});