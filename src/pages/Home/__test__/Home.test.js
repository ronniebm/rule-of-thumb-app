import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "../Home";

test('should render BannerBottom component', () => {
    render(<Home />);
    const bannerBottomElement = screen.getByTestId("home-1");
    expect(bannerBottomElement).toBeInTheDocument();
})
