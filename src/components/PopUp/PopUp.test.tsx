import { describe, test, expect, beforeEach } from "vitest"
import PopUp from "./PopUp"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"

describe("PopUpShowed", () => {
    beforeEach(() => {
        render(<PopUp data-testid="popup-test-id" />);
    })

    test("pop up showed on screen", () => {
        expect(screen.getByTestId("popup-test-id")).toBeDefined()
    })

    test("pop up opened", () => {
        const popup = screen.getByTestId("popup-test-id")
        fireEvent.click(popup);
        const modalContainer = screen.getByTestId("modal-container");
        expect(modalContainer.classList.contains("show-modal")).toBe(true);
    })

    test("pop up closes", async () => {
        const popup = screen.getByTestId("popup-test-id")
        fireEvent.click(popup);

        const modalContainer = screen.getByTestId("modal-container");

        // Esperar hasta que la clase "show-modal" se elimine
        await waitFor(() => {
            expect(modalContainer.classList.contains("show-modal")).toBe(false);
        });
    })
})


    // test("pop up closed", () => {
    //     const popup = screen.getByTestId("popup-test-id")
    //     fireEvent.click(popup);

    //     const modalContainer = screen.getByTestId("modal-container");
    //     fireEvent.click(modalContainer);

    //     expect(screen.queryByText(/Enviame un mail/i)).toBeNull();
    // })

    // test("modal container does not have 'pepe' class", () => {
    //     const modalContainer = screen.getByTestId("modal-container");
    //     expect(modalContainer.classList.contains("pepe")).toBe(false);
    // })
