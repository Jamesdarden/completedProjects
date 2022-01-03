const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const SELECTIONS = [
    {
        name : 'rock',
        emoji: 'rock',
        beats:'scissors'
    },
    {
        name : 'paper',
        emoji: 'paper',
        beats:'rock'
    },
    {
        name : 'scissors',
        emoji: 'rock',
        beats:'paper'
    },
];

selectionButtons.forEach(selectionButton =>{
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;   
        const selection = SELECTIONS.find(selection => selection.name === selectionName) ;
        makeselection(selection)

    })
});

function makeselection(selection){
    const computerselection = randomSelection();
    const yourWinner = isWinner(selection,computerselection);
    const computerWinner = isWinner(computerselection, selection);
    
    addSelectionResult(computerselection, computerWinner);
    addSelectionResult(selection, yourWinner);
};

function addSelectionResult(selection, winner){
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner')
    finalColumn.after(div);

}

function randomSelection ()  {
    const randomIndex = Math.floor(Math.random()* SELECTIONS.length);
    return SELECTIONS[randomIndex]

}

function isWinner(selection, opponentSelection){
    return SELECTIONS.beats === opponentSelection.name
    

};