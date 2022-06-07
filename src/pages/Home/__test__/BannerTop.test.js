import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BannerTop from "../../../components/BannerTop/BannerTop";

test('should render BannerTop component', () => {
    render(<BannerTop />);
    const bannerTopElement = screen.getByTestId("banner-top-1");
    expect(bannerTopElement).toBeInTheDocument();
})
