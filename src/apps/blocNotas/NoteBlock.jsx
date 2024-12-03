import './noteblock.css';
export const NoteBlock = () => {
    const onClickEmptyTextArea = () => {
        document.querySelector('.textAreaNoteBlock').value = '';
    }  
  return (
    <>
        <main className="noteBlockMainApp">
            <header className='headerNoteBlock'>
                <button onClick={onClickEmptyTextArea} className='buttonNoteBlock'>Nuevo archivo</button>
            </header>
        <textarea placeholder="Escriba..." className='textAreaNoteBlock'></textarea>
        </main>
    </>
  )
}
