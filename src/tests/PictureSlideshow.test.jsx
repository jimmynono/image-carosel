import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PictureSlideshow from "../PictureSlideshow";

describe('Picture slide show tests', () => {
  it('Should run test', () => {
    expect(2+ 2).toBe(4)
  })

  it('Should render componet', () => {
    const mockData = [
      {imageUrl: 'http://www.image.com/1234', description: 'Words about image' }
    ]
    render(<PictureSlideshow pictures={mockData} />)
    const el = screen.getByText('Words about image')
    expect(el).toBeInTheDocument()

    const imgEl = screen.getByRole('img')
    expect(imgEl).toHaveAttribute('src')
  })
})