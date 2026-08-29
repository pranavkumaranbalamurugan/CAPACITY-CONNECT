Login details

{
    admin_user:{
        email:admin@capacityconnect.com,
        password: admin@123
    }
}

Routes for testers: http://localhost:5173/testing


1. Install Python
Step 1: Download Python

Go to the official Python website:

Python Downloads

Download the latest stable version suitable for your project.

Step 2: Install Python

Run the installer.

Important: Before clicking Install, enable:

☑ Add python.exe to PATH

Then click:

Install Now
Step 3: Verify installation

Open PowerShell and run:

python --version

You should get something like:

Python 3.x.x

Also check pip:

pip --version
Step 4: Test Python
python

You should see:

>>>

Test:

print("Python is working!")

Exit:

exit()
2. Install uv Package Manager

uv is a fast Python package and project manager. It can replace much of the workflow involving pip, venv, and dependency management.

Step 1: Install uv

Open PowerShell and run:

powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
Step 2: Restart PowerShell

Close PowerShell and open it again.

Step 3: Verify uv
uv --version

You should see something similar to:

uv 0.x.x
Step 4: Test creating a Python project
mkdir test-project
cd test-project
uv init

This creates a project containing:

test-project/
├── .gitignore
├── .python-version
├── README.md
└── pyproject.toml
Step 5: Install dependencies

For example:

uv add requests

Or:

uv add fastapi uvicorn

Then:

uv sync

uv creates:

.venv/
uv.lock
Step 6: Run Python through uv
uv run python

Or:

uv run main.py
If you already have a pyproject.toml

Navigate to the project:

cd D:\your-project

Then simply run:

uv sync

This will install the dependencies specified in pyproject.toml.

3. Install Node.js

Node.js is required for JavaScript/TypeScript development and frameworks such as React, Next.js, and many frontend tools.

Step 1: Download Node.js

Go to the official website:

Node.js Official Website

Download the LTS version.

For development, choose:

LTS

rather than the Current release.

Step 2: Install Node.js

Run the installer.

Keep the default options.

Make sure these components remain selected:

☑ Node.js runtime
☑ npm package manager
☑ Add to PATH

Complete the installation.

Step 3: Verify Node.js

Open a new PowerShell window:

node --version

Example:

v24.x.x

Check npm:

npm --version

Example:

11.x.x
Step 4: Test Node.js

Run:

node

Then:

console.log("Node.js is working!");

Exit:

.exit
4. Install PostgreSQL

PostgreSQL is the database server.

Step 1: Download PostgreSQL

Go to the official PostgreSQL website:

PostgreSQL Downloads for Windows

Download the Windows installer provided by EDB.

Step 2: Start the installer

You will see components such as:

☑ PostgreSQL Server
☑ pgAdmin 4
☑ Stack Builder
☑ Command Line Tools

For normal development, install:

PostgreSQL Server
pgAdmin 4
Command Line Tools
Step 3: Choose installation directory

The default is usually fine:

C:\Program Files\PostgreSQL\<version>

Click Next.

Step 4: Set the database password

The installer will ask you to create a password for the PostgreSQL postgres user.

For example:

Username: postgres
Password: ********

Remember this password.

You will need it when connecting your applications to PostgreSQL.

Step 5: Set the port

Keep the default:

Port: 5432

Unless another PostgreSQL installation is already using it.

Step 6: Complete installation

Finish the installation.

Verify PostgreSQL

Open PowerShell:

psql --version

You should see something like:

psql (PostgreSQL) 18.x

If psql isn't recognized, PostgreSQL's bin directory may not be in your PATH.

Usually it is located at:

C:\Program Files\PostgreSQL\<version>\bin

You can also use SQL Shell (psql) from the Windows Start Menu.

5. Test PostgreSQL

Open:

SQL Shell (psql)

It will ask:

Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Password for user postgres:

For the defaults, press Enter for:

Server: localhost
Database: postgres
Port: 5432
Username: postgres

Then enter the password you created during installation.

You should get:

postgres=#

Test:

SELECT version();

You should receive the PostgreSQL version information.

6. Final Verification

Open a fresh PowerShell window and run:

python --version
uv --version
node --version
npm --version
psql --version

Your environment should look approximately like:

Python     → Python 3.x.x
uv         → uv 0.x.x
Node.js    → v24.x.x
npm        → 11.x.x
PostgreSQL → PostgreSQL 18.x
