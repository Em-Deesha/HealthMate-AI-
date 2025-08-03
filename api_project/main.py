from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from gemini import GeminiHealthBot
from fastapi.middleware.cors import CORSMiddleware

class PromptRequest(BaseModel):
    user_prompt: str

app = FastAPI()

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "HealthMate AI backend working"}

@app.post("/ask")
def ask_bot(request: PromptRequest):
    bot = GeminiHealthBot()
    answer = bot.generate(request.user_prompt)
    return JSONResponse(content={"response": answer})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)