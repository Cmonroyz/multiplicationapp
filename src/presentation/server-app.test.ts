import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from './server-app';


describe ('ServerApp', () => {

    test('should create ServerApp instance', () => {
    const serverApp = new ServerApp();
    expect( serverApp ).toBeInstanceOf(ServerApp);
    expect( typeof ServerApp.run ).toBe('function');
    
    });

    test('should run ServerApp with options', () => {
      const logSpy = jest.spyOn(console, 'log');
      const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
      const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' );

      const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: 'test-destination',
        fileName: 'test-filename',
      };
      ServerApp.run(options);
      expect( logSpy ).toHaveBeenCalledTimes(2);
      expect( logSpy ).toHaveBeenCalledWith('ServerApp is running...');

      expect( createTableSpy ).toHaveBeenCalledWith({
        base: options.base,
        limit: options.limit,}
      );
      expect( saveFileSpy ).toHaveBeenCalledWith({
        fileContent: expect.any(String),
        fileDestination: options.fileDestination,
        fileName: options.fileName,
      });

    });
});