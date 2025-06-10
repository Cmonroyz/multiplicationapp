import { CreateTable } from './create-table.use-case';

describe( 'CreateTableUseCase', () => { 
  test ('Shoul create table with default values', () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 2 });
    const rows = table.split( '\n' ).length;

    expect ( createTable ).toBeInstanceOf( CreateTable );
    expect ( table ).toContain( '2 x 1 = 2' );
    expect ( rows).toBe( 10 );
  });
});    