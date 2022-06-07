import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BannerBottom from "../../../components/BannerBottom/BannerBottom";

test('should render BannerBottom component', () => {
    render(<BannerBottom />);
    const bannerBottomElement = screen.getByTestId("banner-bottom-1");
    expect(bannerBottomElement).toBeInTheDocument();
})

test('BannerBottom Submit button have text', () => {
    render(<BannerBottom />);
    const bannerBottomBtnSubmit = screen.getByTestId("banner-bottom-btn-submit");
    expect(bannerBottomBtnSubmit).toHaveTextContent("Submit a name");
})
