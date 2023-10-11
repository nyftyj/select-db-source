import MongodbLogo from './assets/logos/mongodb.svg';
import PostgressLogo from './assets/logos/postgres-logo.svg';
import MySQLLogo from './assets/logos/my-sql-logo.svg';
import MicrosoftAccessLogo from './assets/logos/microsoft-logo.svg';
import AirTableLogo from './assets/logos/airtable-logo.svg';
import S3Logo from './assets/logos/s3-logo.svg';
import CassandraLogo from './assets/logos/cassandra-logo.svg';
import ClickhouseLogo from './assets/logos/clickhouse-logo.svg';
import CouchbaseLogo from './assets/logos/couchbase-logo.svg';
import CreateDBLogo from './assets/logos/createdb-logo.svg';
import DoltLogo from './assets/logos/dolt-logo.svg';
import DataStaxLogo from './assets/logos/data-stax-logo.svg';
import DynamoDBLogo from './assets/logos/dynamo-db-logo.svg';
import ElasticSearchLogo from './assets/logos/elastic-search-db-logo.svg';
import FirebirdLogo from './assets/logos/firebird-logo.svg';

const FILTER_BY_DEFAULT_TEXT = 'Filter by';
const RELATIONAL = 'Relational';
const NO_SQL = 'NoSQL'; // non-relational
const FLAT_FILE = 'Flat file';
const CLOUD = 'Cloud';

const DB_FILTER_OPTIONS = [
    FILTER_BY_DEFAULT_TEXT,
    RELATIONAL,
    NO_SQL,
    FLAT_FILE,
    CLOUD,
]

// For simplicity, I kept the defined DB types generic.
// I used Set to categorize database types for quick look up.
const DB_TYPE_MAP = {
    mongoDB: new Set([NO_SQL]),
    postgres: new Set([NO_SQL, RELATIONAL]),
    mySQL: new Set([RELATIONAL]),
    microsoftAccess: new Set([FLAT_FILE, RELATIONAL]),
    airtable: new Set([RELATIONAL]),
    s3: new Set([NO_SQL]),
    cassandra: new Set([NO_SQL]),
    clickHouse: new Set([RELATIONAL]),
    couchbase: new Set([NO_SQL, CLOUD]),
    createdb: new Set([NO_SQL, RELATIONAL]),
    dolt: new Set([RELATIONAL]),
    dataStax: new Set([NO_SQL]),
    dynamoDB: new Set([NO_SQL]),
    elasticSearch: new Set([NO_SQL]),
    firebird: new Set([RELATIONAL])
}

const MOCK_DBS = [
    {
        name: 'Mongo DB',
        type: DB_TYPE_MAP.mongoDB,
        img: MongodbLogo,
    },
    {
        name: 'Postgres',
        type: DB_TYPE_MAP.postgres,
        img: PostgressLogo
    },
    {
        name: 'MySQL',
        type: DB_TYPE_MAP.mySQL,
        img: MySQLLogo
    },
    {
        name: 'Microsoft Access',
        type: DB_TYPE_MAP.microsoftAccess,
        img: MicrosoftAccessLogo,
    },
    {
        name: 'Airtable',
        type: DB_TYPE_MAP.airtable,
        img: AirTableLogo
    },
    {
        name: 'S3',
        type: DB_TYPE_MAP.s3,
        img: S3Logo
    },
    {
        name: 'Cassandra',
        type: DB_TYPE_MAP.cassandra,
        img: CassandraLogo
    },
    {
        name: 'ClickHouse',
        type: DB_TYPE_MAP.clickHouse,
        img: ClickhouseLogo,
    },
    {
        name: 'Couchbase',
        type: DB_TYPE_MAP.couchbase,
        img: CouchbaseLogo
    },
    {
        name: 'CreateDB',
        type: DB_TYPE_MAP.createdb,
        img: CreateDBLogo
    },
    {
        name: 'Dolt',
        type: DB_TYPE_MAP.dolt,
        img: DoltLogo
    },
    {
        name: 'Data Stax',
        type: DB_TYPE_MAP.dataStax,
        img: DataStaxLogo
    },
    {
        name: 'DynamoDB',
        type: DB_TYPE_MAP.dynamoDB,
        img: DynamoDBLogo,
    },
    {
        name: 'Elastic Search',
        type: DB_TYPE_MAP.elasticSearch,
        img: ElasticSearchLogo
    },
    {
        name: 'Firebird',
        type: DB_TYPE_MAP.firebird,
        img: FirebirdLogo
    }, 
];


export {
    MOCK_DBS,
    DB_TYPE_MAP,
    DB_FILTER_OPTIONS,
    FILTER_BY_DEFAULT_TEXT,
}