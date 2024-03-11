import { render, screen } from "@testing-library/react"
import Header from "../Header/Header";
import "@testing-library/jest-dom";

it("Should check header component", ()=>{
    render(<Header/>);

    const header = screen.getByText('logout');

    expect(header).toBeInTheDocument(); //need to check not working
})