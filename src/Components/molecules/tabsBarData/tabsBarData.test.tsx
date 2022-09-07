import * as React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";

import TabsBarData from ".";

test("should render pagination", () => {

    render(<TabsBarData handleClick={(id: string)=>{
        console.log("working "+ id);
    } }/>);  


    expect(screen.getByText("Social Science")).toBeInTheDocument();
    expect(screen.getByText("Others")).toBeInTheDocument();
    expect(screen.getByText("Science")).toBeInTheDocument();
    expect(screen.getByText("Life Style")).toBeInTheDocument();
    expect(screen.getByText("Exams Preparation")).toBeInTheDocument();
    expect(screen.getByText("Textbooks & Guides")).toBeInTheDocument();
    expect(screen.getByText("Mathematics")).toBeInTheDocument();
    expect(screen.getByText("Communication Skills")).toBeInTheDocument();
});