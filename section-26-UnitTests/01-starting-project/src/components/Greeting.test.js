import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import Greetings from './Greeting';

describe('Greeting component', ()=>{

    test('test if hello worlds is rendered', ()=>{
        // Arrange
        render(<Greetings/>);
        //Act
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('test if good to see you is there', ()=>{
        // Arrange
        render(<Greetings/>);
        //Act

        //Assert
        const goodToSeeYouElement = screen.getByText("It's good to see you!", {exact: true});
        expect(goodToSeeYouElement).toBeInTheDocument();
    })
    test('test if good to see you is not there on button click', ()=>{
        // Arrange
        render(<Greetings/>);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const goodToSeeYouElement = screen.queryByText("It's good to see you!", {exact: false});
        expect(goodToSeeYouElement).not.toBeInTheDocument();
    })
    test('change text is not there there initially', ()=>{
        // Arrange
        render(<Greetings/>);
        //Act
    
        //Assert
        const changeTextElement = screen.queryByText("Changed", {exact: true});
        expect(changeTextElement).not.toBeInTheDocument();
    })
    test('changed is there if button is clicked', ()=>{
        // Arrange
        render(<Greetings/>);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const changedElement = screen.getByText("Changed", {exact: true});
        expect(changedElement).toBeInTheDocument();
    })
})
