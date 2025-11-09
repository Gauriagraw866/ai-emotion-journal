from textblob import TextBlob

# A richer, rule-based mapping for emotional tone
def analyze_emotion(text):
    """
    Returns one of: Happy, Sad, Angry, Excited, Fear, Disgusted, Surprised, Neutral
    based on sentiment polarity + keyword cues.
    """
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    text_lower = text.lower()

    # Keyword-based emotion hints
    emotion_keywords = {
        "angry": ["angry", "furious", "mad", "rage", "irritated"],
        "excited": ["excited", "thrilled", "amazing", "fantastic", "great"],
        "fear": ["afraid", "scared", "fear", "terrified", "worried"],
        "disgusted": ["disgusted", "gross", "hate", "dislike", "awful"],
        "surprised": ["surprised", "shocked", "wow", "unexpected"],
    }

    for emotion, words in emotion_keywords.items():
        if any(word in text_lower for word in words):
            return emotion.capitalize()

    # Polarity-based fallback
    if polarity > 0.5:
        return "Happy"
    elif polarity > 0.1:
        return "Excited"
    elif polarity < -0.5:
        return "Sad"
    elif polarity < -0.1:
        return "Angry"
    else:
        return "Neutral"
