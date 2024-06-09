import { useEffect, useState } from "react";
import bugs from "../database/jsons/bugs.json";
import lawnmowers from "../database/jsons/lawnmowers.json";
import pigeons from "../database/jsons/pigeons.json";


function SelectLanguageSubjectDemo() {
    const available_subjects = [bugs, lawnmowers, pigeons]
    const language_options = ["English", "Spanish", "French"];
    const subject_options = ["Insects", "Lawnmowers", "Pigeons"];
    const [activeLanguage, setActiveLanguage] = useState("Insects");
    const [activeSubject, setActiveSubject] = useState("");
    const [chosenJson, chooseJson] = useState(available_subjects[0]);
    const [currentIndex, advanceCurrentIndex] = useState(0);

    return (
        <div className="container">
            <div className="row">
                <div className={`${activeLanguage!==""&&activeSubject!==""?`col-2`:`col-6`} d-flex flex-column justify-content-around p-0`}>
                    <ul className="list-group m-0 p-0">
                        <li className="bg-light list-group-item"><h3>Choose Your Language:</h3></li>
                        {language_options.map(language => (
                            <button 
                                key={language}
                                className={`btn list-group-item ${activeLanguage === language ? 'bg-primary' : 'bg-light'} m-0 p-0`} 
                                onClick={() => {setActiveLanguage(language)}}
                            >
                                <h3 className="my-3">{language}</h3>
                            </button>
                        ))}
                    </ul>
                </div>
                <div className={`${activeLanguage!==""&&activeSubject!==""?`col-2`:`col-6`} d-flex flex-column justify-content-around p-0`}>
                    <ul className="list-group m-0 p-0">
                        <li className="bg-light list-group-item"><h3>Choose Your Subject:</h3></li>
                        {subject_options.map(subject => (
                            <button 
                                key={subject}
                                className={`btn list-group-item ${activeSubject === subject ? 'bg-primary' : 'bg-light'} m-0 p-0`} 
                                onClick={() => {
                                    setActiveSubject(subject);
                                    chooseJson(available_subjects[subject_options.indexOf(subject)])
                                }}
                            >
                                <h3 className="my-3">{subject}</h3>
                            </button>
                        ))}
                    </ul>
                </div>
                
                {(activeLanguage!==""&&activeSubject!=="")&&(
                    <div className="col-8 bg-success">
                        <img src={`${process.env.PUBLIC_URL}/images/${chosenJson[currentIndex].image}`} className="img-fluid rounded mx-auto d-block" alt={`${chosenJson[currentIndex].image}`} />
                        {activeLanguage==="English"&&(<div>{chosenJson[currentIndex].funFact[0]}</div>)}
                        {activeLanguage==="Spanish"&&(<div>{chosenJson[currentIndex].funFact[1]}</div>)}
                        {activeLanguage==="French"&&(<div>{chosenJson[currentIndex].funFact[2]}</div>)}
                    </div>
                )}
            </div>
            <div className="row justify-content-center">
                <button onClick={()=>currentIndex>=chosenJson.length? advanceCurrentIndex(0):advanceCurrentIndex(currentIndex+1)} className="btn btn-success">Next</button>

            </div>
        </div>
    );
}

export default SelectLanguageSubjectDemo;
