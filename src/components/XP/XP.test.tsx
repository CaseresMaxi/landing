import { describe, test, expect, beforeEach } from "vitest"
import Xp from "./Xp"
import { render, screen } from "@testing-library/react"

describe("Xp test", () => {
    beforeEach(() => {
        render(<Xp xp={[]} />);
    })

    test("xp showed on screen", () => {
        const xpElement = screen.getByTestId("xp-id");
        expect(xpElement).toBeTruthy();
    })



    test("renders xp details correctly", () => {
        const xpData = [
            {
                title: "Experience Title",
                date: "2024-01-28",
                name: "Company Name",
                desc: "Description of the experience",
                tecs: ["Tech1", "Tech2", "Tech3"],
            },
        ];

        render(<Xp xp={xpData} />);

        const titleElement = screen.queryAllByAltText("Experience Title - Company Name");
        const dateElement = screen.getByText("2024-01-28");
        const descElement = screen.getByText("Description of the experience");
        const tech1Element = screen.getByText("Tech1");
        const tech2Element = screen.getByText("Tech2");
        const tech3Element = screen.getByText("Tech3");

        expect(titleElement).toBeTruthy();
        expect(dateElement).toBeTruthy();
        expect(descElement).toBeTruthy();
        expect(tech1Element).toBeTruthy();
        expect(tech2Element).toBeTruthy();
        expect(tech3Element).toBeTruthy();
    });

})
