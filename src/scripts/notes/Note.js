export const notes = (noteObject) => {
    return `<section class ="noteCard">
    <div class="id"><a>ID: </a>${noteObject.id}</div>
    <div class="DateOfNote"><a>Date: </a>${noteObject.DateofNote}</div>
    <div class="noteText"><a>Note: </a>${noteObject.noteText}</div>
    <div class="suspect"><a>Suspect: </a>${noteObject.suspect}</div>
    </section>`
}

