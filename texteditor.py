inputFile = open("SampleInput2.txt", "r")
outputFile = open("SampleOutput2.txt")

articleText = inputFile.read()

splitText = articleText.split(' ')

outputArray = []


def charReplace(string):
    if(string):
        if(string[0].isupper()):
            frontText = 'Schm'
        else:
            frontText = 'schm'

    for i in range(0, len(string)-1):
        if((string[i] == 'a') or (string[i] == 'e') or (string[i] == 'i') or (string[i] == 'o') or (string[i] == 'u') or (string[i] == 'y')):
            cutStr = string[(i):]
            outputText = frontText + cutStr
            return outputText
    return string


for word in splitText:
    # schmword = charReplace(word)
    # outputArray.append(schmword)
    outputArray.append(word)

with open("SampleInput2-2.txt", "w") as fileoutput:
    for item in outputArray:
        fileoutput.write("%s\n" % item)
