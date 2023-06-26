#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
		cd /home/coder/project/workspace/springapp/;
		mvn clean test;
    else
        echo "testGetLoanApplicationAll FAILED";
        echo "testGetLoanApplicationById FAILED";
        echo "testCreateLoanApplication FAILED";
        echo "test_case1 FAILED";
        echo "test_case2 FAILED";
    fi
else
        echo "testGetLoanApplicationAll FAILED";
        echo "testGetLoanApplicationyId FAILED";
        echo "testCreateLoanApplication FAILED";
        echo "test_case1 FAILED";
        echo "test_case2 FAILED";
fi
