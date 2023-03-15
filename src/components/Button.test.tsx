import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

it("renders homepage unchanged", () => {
  const mockFn = jest.fn();
  render(<Button onClick={mockFn} />);
  const element = screen.getByRole('button', {
    name: /hola mundo/i
  })

  // Validate onClick
  expect(mockFn).not.toHaveBeenCalled();

  // Click the button
  fireEvent.click(element);

  // Validate onClick
  expect(mockFn).toHaveBeenCalled();
});
