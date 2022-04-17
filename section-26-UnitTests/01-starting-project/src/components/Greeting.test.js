import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
})
