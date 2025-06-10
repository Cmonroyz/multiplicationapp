import  fs  from 'fs';
import { SaveFile } from './save-file.use-case';


describe('SaveFileUseCase', () => {
  // borrar el direcctorio antes de las pruebas
  beforeEach(() => {
    fs.rmSync('outputs', { recursive: true });
  });

  afterEach(() => {
    // borrar el directorio después de las pruebas
    if (fs.existsSync('outputs')) {
      fs.rmSync('outputs', { recursive: true });
    }
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

});