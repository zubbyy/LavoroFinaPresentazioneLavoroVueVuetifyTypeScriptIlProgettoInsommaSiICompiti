import subprocess
from threading import Thread

print("CIAO QESTO E IL SORFTWARE CHE DEV SESUFIRE TUTOT CIAO")
first_time = 1
def frontend():
    subprocess.run("cd frontend && npm i && npm run dev", shell=True, check=True)

def backend():
    subprocess.run("cd backend/api && npm i && node api.js", shell=True, check=True)
print("INIZIO THREAD COSI PIACE A FINA")
Thread(target=frontend).start()
Thread(target=backend).start()
print("FINE THREAD COSI PIACE A FINA")