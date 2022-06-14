import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateArticle from "../CreateArticle";

const MockCreateArticle = () => {
  return (
    <BrowserRouter>
      <CreateArticle />
    </BrowserRouter>
  );
};

describe("input test", () => {
  it("renders an input onchange test that works", async () => {
    render(<MockCreateArticle />);
    const inputElement = screen.getByPlaceholderText(/enter the title/i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {target: {value: "why people wash their body often"}});
    expect(inputElement.value).toBe("why people wash their body often")
  });
});
