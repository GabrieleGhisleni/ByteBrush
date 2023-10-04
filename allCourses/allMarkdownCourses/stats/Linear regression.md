# Introduction to Linear Regression

Linear regression is a fundamental statistical and machine learning concept used to understand the relationship between two or more variables. When we have a single input variable (x), the method is referred to as simple linear regression. For more than one input variable, it's called multiple linear regression.

The main purpose of linear regression is to predict a dependent variable value (y) based on a given independent variable (x). So, this regression technique finds out a linear relationship between x (input) and y(output).

Linear regression solves a variety of problems in business, economics, social sciences, and data science. For example, it can be used to forecast sales in the coming months by analyzing the sales data of the past months. It can also be used to predict the growth of a startup company based on certain factors like market demand, market situation, etc.

# Core Components of Linear Regression

## 1. The Regression Line

The equation of the regression line is represented as:

$$y = b_0 + b_1*x$$

Here, 
- $y$ is the dependent variable.
- $x$ is the independent variable.
- $b_0$ is the y-intercept.
- $b_1$ is the slope of the line.

The slope of the line (b1) indicates the rate at which y changes for each unit change in x. The y-intercept (b0) is the point where the line crosses the y-axis.

## 2. Least Squares Method

The least squares method is used to find the best-fitting line through the data points. This method minimizes the sum of the squares of the residuals (the vertical distance between the actual y values and the predicted y values). The formula to calculate the slope and y-intercept using the least squares method is:

```math
b_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x}) (y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2}
```

$$ b_0 = \bar{y} - b_1*\bar{x} $$

Here, 
- $x_i$ and $y_i$ are the individual data points.
- $\bar{x}$ and $\bar{y}$ are the means of x and y respectively.

## 3. Coefficient of Determination (R-squared)

The coefficient of determination, also known as R-squared, is a statistical measure that shows how close the data are to the fitted regression line. It ranges from 0 to 1 and the higher the value, the better the model fits the data. The formula to calculate R-squared is:

$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$

Here, 
- $SS_{res}$ is the sum of squares of residuals.
- $SS_{tot}$ is the total sum of squares.

## 4. Assumptions of Linear Regression

There are four key assumptions of linear regression:
- Linearity: The relationship between x and y is linear.
- Independence: The residuals are independent. In particular, there is no correlation between consecutive residuals in time series data.
- Homoscedasticity: The residuals have constant variance at every level of x.
- Normality: The residuals of the model are normally distributed.

These assumptions are crucial for the model to be reliable and for the predictions to be valid.

That's the basic overview of linear regression. Please let me know if there are any specific topics or questions you'd like to explore further.
