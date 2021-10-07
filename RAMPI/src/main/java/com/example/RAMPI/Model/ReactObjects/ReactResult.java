package com.example.RAMPI.Model.ReactObjects;


import java.util.Arrays;

/**
* @author Jesper Larsson
* @author Niklas Höstklint
*
* Represents a result of an assessment
*/
public class ReactResult {

    int resultList[];
    String comments[];
    int nrOfReds;
    int nrOfGreys;
    int nrOfGreens;
    private Integer chapTwoRed;
    private Integer chapThreeRed;
    private Integer chapFourRed;
    private Integer chapFiveRed;


    public ReactResult(int answers[], String comments[]){
        chapTwoRed = chapThreeRed = chapFourRed = chapFiveRed = 0;
        resultList = new int[56];
        this.comments = comments.clone();
        Arrays.fill(resultList, 0);
        nrOfReds = nrOfGreens = nrOfGreys = 0;
        handleChapters(answers);
        colorAmounts();
    }

    private void colorAmounts(){
        for (int i=0;i<resultList.length;i++){
            if (resultList[i] == 1 && (i<50 || i>54)) nrOfGreens++;
            else if (resultList[i] == 2) nrOfGreys++;
            else if (resultList[i] == 3) nrOfReds++;
        }
    }

    private void handleChapters(int[] answers){
        handleChapterOne(answers);
        handleChapterTwo(answers);
        handleChapterThree(answers);
        handleChapterFour(answers);
        handleChapterFive(answers);
        handleChapterSix(answers);
        handleChapterSeven(answers);
    }
    // 0 == WHITE, 1 == GREEN, 2 == GREY, 3 == RED
    // answers 1 = YES, 2 = NO

    private void handleChapterSeven(int[] answers){
        if (answers[70] == 2)
            resultList[55] = 1;
        else if (answers[70] == 1)
            resultList[55] = 2;


    }

    private void handleChapterSix(int answers[]){
        if (answers[64] == 2)
            resultList[49] = 1;
        else if (answers[64] == 1)
            resultList[49] = 2;

        for (int i=65;i<70;i++){
            if (answers[i] == 1)
                resultList[i-15] = 1;
        }
    }

    private void handleChapterFive(int answers[]){
        if (answers[45] == 2 && (answers[46] == 2 || answers[46] == 0))
            resultList[32] = 1;
        else if (answers[45] == 1 && answers[46] == 2)
            resultList[32] = 2;
        else if (answers[46] == 1) {
            resultList[32] = 3;
            chapFiveRed = 1;
        }

        for (int i=47;i<51;i++) {
            if (answers[i] == 2)
                resultList[i - 14] = 1;
            else if (answers[i] == 1)
                resultList[i - 14] = 2;
        }

        if (answers[51] == 2 && (answers[52] == 2 || answers[52] == 0))
            resultList[37] = 1;
        else if (answers[51] == 1 && answers[52] == 2)
            resultList[37] = 2;
        else if (answers[52] == 1)
            resultList[37] = 3;

        for (int i=53;i<64;i++){
            if (answers[i] == 2)
                resultList[i-15] = 1;
            else if (answers[i] == 1)
                resultList[i-15] = 2;
        }

    }



    private void handleChapterFour(int answers[]){
        if (answers[33] == 2){
            resultList[23] = 1;
            resultList[24] = 1;
        } else{
            if (answers[34] == 2 && (answers[35] == 2 || answers[35] == 0))
                resultList[23] = 1;
            else if (answers[34] == 1 && answers[35] == 2)
                resultList[23] = 2;
            else if (answers[35] == 1 && (answers[34] == 1 || answers[34] == 0)) {
                resultList[23] = 3;
                chapFourRed = 1;
            }

            if (answers[36] == 2 && (answers[37] == 2 || answers[37] == 0))
                resultList[24] = 1;
            else if (answers[36] == 1 && answers[37] == 2)
                resultList[24] = 2;
            else if (answers[37] == 1 && (answers[36] == 1 || answers[36] == 0)) {
                resultList[24] = 3;
                chapFourRed = 1;
            }
        }

        for (int i=38;i<45;i++){
            if (answers[i] == 2)
                resultList[i-13] = 1;
            else if (answers[i] == 1)
                resultList[i-13] = 2;
        }
    }

    private void handleChapterThree(int answers[]){
        if (answers[14] == 0 )
            return;
        if (answers[14] == 2){
            for (int i=9;i<14;i++)
                resultList[i] = 1;
        }
        else if (answers[14] == 1){
            if (answers[15] == 1 && answers[16] == 1)
                resultList[9] = 2;
            else
                resultList[9] = 1;

            if (answers[17] == 1 && answers[18] == 1)
                resultList[10] = 2;
            else
                resultList[10] = 1;

            if (answers[19] == 1 && answers[20] == 1)
                resultList[11] = 2;
            else
                resultList[11] = 1;

            if (answers[21] == 1 && answers[22] == 1)
                resultList[12] = 2;
            else
                resultList[12] = 1;

            if (answers[23] == 1) {
                resultList[13] = 3;
                chapThreeRed = 1;
            }
            else
                resultList[13] = 1;
        }

        for (int i=24;i<33;i++){
            if (answers[i] == 2)
                resultList[i-10] = 1;
            else if (answers[i] == 1)
                resultList[i-10] = 2;
        }
    }

    private void handleChapterTwo(int answers[]){
        boolean incomplete = false;
        if ((answers[8] == 1 && answers[13] == 1) || (answers[11] == 1 && answers[13] == 1)) {
            resultList[8] = 3;
            this.chapTwoRed = 1;
        }
        else if ((answers[8] == 1 && answers[12] == 1) || (answers[9] == 1 && answers[13] == 1)
                || (answers[10] == 1 && answers[13] == 1) || (answers[11] == 1 && answers[12] == 1))
            resultList[8] = 2;
        else{
            for (int i=8;i<12;i++){
                if (answers[i] == 0)
                    incomplete = true;
            }
            if (!incomplete)
                resultList[8] = 1;
            else
                resultList[8] = 0;
        }

    }


    private void handleChapterOne(int answers[]){
        for (int i=0;i<8;i++) {
            if (answers[i] == 1)
                resultList[i] = 2;
            else if (answers[i] == 2)
                resultList[i] = 1;
        }
    }


    public String toString(){
        String str = "";

        for (int i=0;i<resultList.length;i++){
            if (i == 0)
                str+= "\n CHAPTER ONE \n";
            if (i == 8)
                str+= "\n CHAPTER TWO \n";
            if (i == 9)
                str+= "\n CHAPTER THREE \n";
            if (i == 23)
                str+= "\n CHAPTER FOUR \n";
            if (i == 32)
                str+= "\n CHAPTER FIVE \n";


            if (resultList[i] == 0)
                str+= "Question nr: " + i + " WHITE \n";
            if (resultList[i] == 1)
                str+= "Question nr: " + i + " GREEN \n";
            if (resultList[i] == 2)
                str+= "Question nr: " + i + " GREY \n";
            if (resultList[i] == 3)
                str+= "Question nr: " + i + " RED \n";


        }

        str+= "greens: " + nrOfGreens + "\n";
        str+= "greys: " + nrOfGreys + "\n";
        str+= "reds: " + nrOfReds + "\n";

        return str;
    }


    public int[] getResultList() {
        return resultList;
    }

    public void setResultList(int[] resultList) {
        this.resultList = resultList;
    }

    public String[] getComments() {
        return comments;
    }

    public void setComments(String[] comments) {
        this.comments = comments;
    }

    public int getNrOfReds() {
        return nrOfReds;
    }

    public void setNrOfReds(int nrOfReds) {
        this.nrOfReds = nrOfReds;
    }

    public int getNrOfGreys() {
        return nrOfGreys;
    }

    public void setNrOfGreys(int nrOfGreys) {
        this.nrOfGreys = nrOfGreys;
    }

    public int getNrOfGreens() {
        return nrOfGreens;
    }

    public void setNrOfGreens(int nrOfGreens) {
        this.nrOfGreens = nrOfGreens;
    }

    public Integer getChapTwoRed() {
        return chapTwoRed;
    }

    public void setChapTwoRed(Integer chapTwoRed) {
        this.chapTwoRed = chapTwoRed;
    }

    public Integer getChapThreeRed() {
        return chapThreeRed;
    }

    public void setChapThreeRed(Integer chapThreeRed) {
        this.chapThreeRed = chapThreeRed;
    }

    public Integer getChapFourRed() {
        return chapFourRed;
    }

    public void setChapFourRed(Integer chapFourRed) {
        this.chapFourRed = chapFourRed;
    }

    public Integer getChapFiveRed() {
        return chapFiveRed;
    }

    public void setChapFiveRed(Integer chapFiveRed) {
        this.chapFiveRed = chapFiveRed;
    }
}
