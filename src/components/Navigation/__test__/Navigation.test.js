import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation";

const MockNavigation = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

// buttons
describe("buttons", () => {
  it("renders a button element by text", () => {
    render(<MockNavigation />);
    const buttonElement = screen.getByText("Login", { selector: "button" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders a button element with role of button and text Login", async () => {
    render(<MockNavigation />);
    const buttonElement = await screen.findByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders a button element with a testId of logout", async () => {
    render(<MockNavigation />);
    const buttonElement = screen.getByTestId("logout");
    expect(buttonElement).toBeInTheDocument();
  });
  // getAllByRole
  it("get all buttons and assert their length", () => {
    render(<MockNavigation />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBe(2);
  });
});

// links
describe("links", () => {
  it("renders a link element with a testId of home", async () => {
    render(<MockNavigation />);
    const buttonElement = await screen.findByTestId("logout");
    expect(buttonElement).toBeInTheDocument();
  });
});
