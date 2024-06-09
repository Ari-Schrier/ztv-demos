import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import CaptionedCarousel from '../captioned-carousel';
import { jsons } from '../database/jsons';

function DemoServer() {
    const [activeJson, setActiveJson] = useState(jsons[2].content);
    const [language, setActiveLanguage] = useState(0);

    const handleLanguageSelect = (eventKey:any) => {
        setActiveLanguage(Number(eventKey));
        console.log(`Selected language: ${eventKey}`);
    };
    const handleSelectJson = (eventKey:any) => {
        const selectedJson = JSON.parse(eventKey);
        setActiveJson(selectedJson);
        console.log(`Selected JSON:`, selectedJson);
    };

    return (
        <div className="container">
            <CaptionedCarousel json={activeJson} language={language} />
            <div className='d-flex justify-content-center'>
                <Dropdown onSelect={handleSelectJson}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
                        Select Topic
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {jsons.map((json, index) => (
                            <Dropdown.Item key={index} eventKey={JSON.stringify(json.content)}>
                                {json.Title}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown onSelect={handleLanguageSelect}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" size="lg">
                        Select Language
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="0">English</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Spanish</Dropdown.Item>
                        <Dropdown.Item eventKey="2">French</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default DemoServer;
