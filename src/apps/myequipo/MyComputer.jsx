import './mycomputer.css';

export const MyComputer = () => {
  const handleFileClick = (fileName) => {
    alert(`Abriendo ${fileName}`);
  };

  return (
    <main className='myComputerMainPage'>
      <header className='computerHeader'>
        <ul className='menuBar'>
          <li className='licomputer'>File</li>
          <li className='licomputer'>View</li>
          <li className='licomputer'>Favourites</li>
          <li className='licomputer'>Tools</li>
          <li className='licomputer'>Help</li>
        </ul>
        <hr />
      </header>

      <div className='ComputerAllPage'>
        <aside className='navigationPanel'>
          <p className='navigationTitle'>Folders</p>
          <ul className='navigationList'>
            <li className='folderItem'>Desktop</li>
            <li className='folderItem'>My Documents</li>
            <li className='folderItem'>My Computer</li>
            <li className='folderItem'>Control Panel</li>
          </ul>
        </aside>

        <section className='contentPanel'>
          <div className='sectionHeader'>
            <p className='sectionTitle'>Devices and Drives</p>
            <div className='computerDivBarra'></div>
          </div>

          <div className='mycomputerArticles'>
            {["Local Disk (C:)", "Local Disk (D:)", "USB Drive", "CD Drive"].map((drive, index) => (
              <article key={index} className='myComputerDivfirst' onClick={() => handleFileClick(drive)}>
                <img src={`img/Removable Media.png`} alt={`${drive}`} />
                <p>{drive}</p>
              </article>
            ))}
          </div>

          <div className='sectionHeader'>
            <p className='sectionTitle'>Files and Folders</p>
            <div className='computerDivBarra'></div>
          </div>

          <div className='mycomputerArticles'>
            {["My Music", "My Pictures", "My Videos", "My Documents"].map((folder, index) => (
              <article key={index} className='myComputerDivfirst' onClick={() => handleFileClick(folder)}>
                <img src={`img/${folder}.png`} alt={`${folder}`} />
                <p>{folder}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

