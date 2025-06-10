import  fs  from 'fs';
import { SaveFile } from './save-file.use-case';


describe('SaveFileUseCase', () => {
  // borrar el direcctorio antes de las pruebas
  beforeEach(() => {
    const filePath = [
      'outputs',
      'custom_outputs',
    ]
    filePath.forEach(path => {
      if (fs.existsSync(path)) {
        fs.rmSync(path, { recursive: true });
      }
    });
  });

  afterEach(() => {
      const filePath = [
      'outputs',
      'custom_outputs',
    ]
    filePath.forEach(path => {
      if (fs.existsSync(path)) {
        fs.rmSync(path, { recursive: true });
      }
    });
  });

  test('should create file with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content',
    }

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});
    
    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe( options.fileContent );
  });

  test('should save file wirh custom values', () => {
    const options = {
      fileContent: 'custom content',
      fileDestination: 'custom_outputs/file-destination',
      fileName: 'custom-table-name',
    }
    const saveFile = new SaveFile();
    const result = saveFile.execute(options);
    const filePath = `${options.fileDestination}/${options.fileName}.txt`;
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

});