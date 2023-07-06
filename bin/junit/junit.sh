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
        echo "BEadd_user FAILED";
        echo "BEadd_loan FAILED";
        echo "BEget_loan FAILED";
        echo "BELoan FAILED";
    fi
else
	echo "BEadd_user FAILED";
    echo "BEadd_loan FAILED";
    echo "BEget_loan FAILED";
    echo "BEupdate_loan FAILED";
fi
