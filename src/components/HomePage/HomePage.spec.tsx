import { render, screen } from "@testing-library/react"
import HomePage from "./HomePage"

describe('Test HomePage Component', () => {
    it('should match the snapshot', () => {
        render(<HomePage />)
        screen.getByRole('heading', {
            name: /home page/i
        })
    })
})