# Distributions

## Introduction 
In statistics, a distribution refers to the way in which a set of data is spread or distributed over a range of values or categories. This concept is fundamental in statistics as it provides a mathematical description of the outcomes of a random process. Distributions are used to understand and predict patterns of variability and uncertainty, which are inherent in any data set.

Distributions can be used to solve a variety of problems in statistical analysis. For instance, they can help us understand the probability of a particular outcome in a random event, or they can be used to make predictions about future events based on past data. They can also be used to describe the variability in a data set, and to test hypotheses about the underlying processes that generated the data.

There are several key components of a distribution that we need to understand:

1. Probability Density Function (PDF)

The Probability Density Function (PDF) is a function that describes the likelihood of a random variable taking on a particular value. For continuous random variables, the PDF is the derivative of the Cumulative Distribution Function (CDF). The area under the curve of a PDF (between any two points) is equal to the probability that the variable falls within that range. The PDF of a random variable $X$ is denoted as $f(x)$.

2. Cumulative Distribution Function (CDF)

The Cumulative Distribution Function (CDF) is a function that describes the probability that a random variable is less than or equal to a certain value. It is defined as the integral of the PDF from negative infinity to $x$. The CDF of a random variable $X$ is denoted as $F(x)$.

3. Mean and Variance

The mean of a distribution is the expected value of the random variable, while the variance is a measure of the dispersion of the random variable around the mean. For a random variable $X$ with PDF $f(x)$, the mean $\mu$ and variance $\sigma^2$ are given by:

Mean: $\mu = E[X] = \int_{-\infty}^{\infty} x f(x) dx$

Variance: $\sigma^2 = Var[X] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx$

4. Skewness and Kurtosis

Skewness is a measure of the asymmetry of a distribution, while kurtosis is a measure of the "tailedness" of a distribution. Positive skewness indicates a distribution with an asymmetric tail extending towards more positive values. Kurtosis indicates the heaviness of the tails of a distribution. Higher kurtosis means more of the variance is the result of infrequent extreme deviations, as opposed to frequent modestly sized deviations.


## Normal Distribution
The Normal Distribution is a continuous probability distribution that has a bell-shaped probability density function, known as the Gaussian function. It is the most common distribution and is often used in the natural and social sciences for real-valued random variables whose distributions are not known.

The graph of the Normal Distribution depends on two factors - the mean and the standard deviation. The mean of the distribution determines the location of the center of the graph, and the standard deviation determines the height and width of the graph. When the standard deviation is large, the curve is short and wide; when the standard deviation is small, the curve is tall and narrow.

All Normal Distributions look like a symmetric, bell-shaped curve, as shown below:

![Normal Distribution](https://upload.wikimedia.org/wikipedia/commons/7/74/Normal_Distribution_PDF.svg)

The probability density function of a Normal Distribution with mean $\mu$ and standard deviation $\sigma$ is given by:

$$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{ -\frac{(x-\mu)^2}{2\sigma^2} }$$

Here are some key properties of the Normal Distribution:

1. **Symmetry**: The Normal Distribution is symmetric about its mean. This means that the left and right halves of the distribution are mirror images of each other.

2. **Mean, Median, Mode**: For a Normal Distribution, the mean, median, and mode are all equal and are located at the center of the distribution.

3. **Empirical Rule**: In a Normal Distribution, about 68% of the data falls within one standard deviation of the mean, about 95% falls within two standard deviations, and about 99.7% falls within three standard deviations. This is known as the Empirical Rule or the 68-95-99.7 rule.

4. **Asymptotic**: The Normal Distribution is asymptotic, which means that the tails of the distribution extend to infinity without touching the horizontal axis.

The Normal Distribution is widely used in statistics and in natural and social sciences as a simple model for complex random variables. For example, it is used in hypothesis testing, in the Central Limit Theorem, in confidence intervals, etc.

### Normal distribution usage

The Normal Distribution is one of the most widely used distributions in statistics due to its mathematical properties and its prevalence in natural phenomena. Here are some of its main uses:

1. **Central Limit Theorem**: The Central Limit Theorem states that the sum of a large number of independent and identically distributed (i.i.d.) random variables tends towards a Normal Distribution, regardless of the shape of the original distribution. This is a fundamental concept in probability theory and provides a reason for the ubiquity of the Normal Distribution in many natural phenomena.

2. **Confidence Intervals**: In statistics, we often use the Normal Distribution to calculate confidence intervals. If a population is Normal, then the distribution of sample means is also Normal. Therefore, we can use the properties of the Normal Distribution to calculate intervals around the sample mean that provide a certain level of confidence of containing the population mean.

3. **Hypothesis Testing**: Many statistical tests, such as the t-test and z-test, are based on the assumption of Normality. These tests are used to draw conclusions about a population from a sample. The tests compare the observed data to what would be expected under a Normal Distribution, given the null hypothesis.

4. **Quality Control and Process Monitoring**: In industries, the Normal Distribution is used to analyze variations in manufacturing and business processes. It helps in setting up the process, monitoring quality, and predicting defects.

5. **Natural and Social Sciences**: Many phenomena in nature and society follow a Normal Distribution. Examples include heights or weights of a large group of people, blood pressure, marks on a test, etc. 

6. **Finance**: In finance, the Normal Distribution is used to model price changes in stocks and other securities. It is also used in the Black-Scholes model for pricing options.

Remember, while the Normal Distribution is widely used, it's important to check whether its assumptions hold for your specific use case. Not all data are normally distributed, and using Normal-based statistical techniques for non-Normal data can lead to incorrect conclusions.

### Standard Normal Distribution

The Standard Normal Distribution is a special case of the Normal Distribution. It is a Normal Distribution with a mean of 0 and a standard deviation of 1. 

The Standard Normal Distribution is used as a basis for understanding and finding probabilities for other normal distributions. This is done through a process called standardization or normalization.

The graph of the Standard Normal Distribution is centered at zero and the spread is adjusted to units in terms of standard deviations. This makes it easier to compare data with different means and standard deviations.

Here is the probability density function of the Standard Normal Distribution:

$$f(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$$

The Standard Normal Distribution is often represented by the letter Z. When a random variable X is transformed into Z, the resulting distribution is a Standard Normal Distribution. The transformation is done using the formula:

$$Z = \frac{X - \mu}{\sigma}$$

where:
- $X$ is a value from the original Normal Distribution,
- $\mu$ is the mean of the original Normal Distribution, and
- $\sigma$ is the standard deviation of the original Normal Distribution.

The Z-score tells you how many standard deviations an element is from the mean. It allows comparison of data from different normal distributions, which is a common requirement in research.

![Standard Normal Distribution](https://upload.wikimedia.org/wikipedia/commons/7/74/Normal_Distribution_PDF.svg)

The area under the curve of the Standard Normal Distribution can be interpreted as probabilities and is a critical component in hypothesis testing and the calculation of confidence intervals.

### Z-Tables
A standard normal distribution table, also known as a Z-table, is a mathematical table that allows us to know the probability that a normally distributed random variable Z is less than or equal to a given value.

The standard normal distribution is a special case of the normal distribution where the mean ($\mu$) is 0 and the standard deviation ($\sigma$) is 1. It's called "standard" because it has been standardized to remove the units of measurement, allowing different normal distributions to be compared.

The Z-table provides the probability that a random variable Z is less than z, denoted as P(Z < z). The values in the table represent the area to the left of z under the standard normal curve.

Here's how to use the Z-table:

1. **Find the Z-score**: First, you need to calculate the Z-score of your data point. The Z-score is a measure of how many standard deviations an element is from the mean.

2. **Look up the Z-score in the Z-table**: The Z-table is divided into two parts: the main body of the table and the left column and top row. The left column and top row are used to find the Z-score. The left column represents the first two digits and the decimal point of the Z-score, and the top row represents the second decimal place. For example, to find the probability for Z = -0.66, you would look for -0.6 in the left column and 0.06 in the top row.

3. **Find the probability**: The intersection of the row and column in the main body of the table is the probability that Z is less than your Z-score.

Here is an example of a standard normal distribution table: [Z-table](https://www.math.arizona.edu/~rsims/ma464/standardnormaltable.pdf)

Remember, the Z-table only gives you probabilities for Z-scores less than your value (i.e., the area to the left of your value under the standard normal curve). If you want the probability that Z is greater than your value, you would subtract the table value from 1.

### Confidence Intervals
Confidence intervals are a range of values that are used to estimate the true value of a population parameter. They provide an estimated range of values which is likely to include an unknown population parameter, the estimated range being calculated from a given set of sample data. 

In other words, a confidence interval is a way of quantifying the uncertainty of an estimate. It provides a range of plausible values for the parameter rather than a single point estimate, and also quantifies the level of confidence that the parameter lies in the interval.

The confidence level is defined for a particular estimation procedure and represents the frequency (i.e. the proportion) of possible confidence intervals that contain the true value of the unknown population parameter. For example, if a 95% confidence interval is used, then 95% of the time the interval will contain the true parameter value.

The formula for a confidence interval depends on the parameter being estimated, but for a population mean $\mu$ with a Normal Distribution, the confidence interval is given by:

$$\bar{x} \pm z \frac{\sigma}{\sqrt{n}}$$

where:

- $\bar{x}$ is the sample mean
- $z$ is the z-score, which depends on the desired confidence level (for a 95% confidence interval, $z$ is approximately 1.96)
- $\sigma$ is the standard deviation of the population
- $n$ is the sample size

The width of the confidence interval gives us some idea about how uncertain we are about the unknown parameter. A wide interval may indicate that we need more data to get a precise estimate of the parameter, while a narrow interval may indicate that we have enough data.

Remember, a confidence interval is not a definitive range of plausible values for the parameter, but rather an indication of where the true parameter value lies, given the data.

### Confidence interval usage

Suppose we have a sample of 100 people, and we're interested in estimating the average height of people in this population. We measure the heights and find that the sample mean ($\bar{x}$) is 170 cm, and the standard deviation ($\sigma$) is 10 cm.

We want to estimate the true population mean height ($\mu$) with a 95% confidence interval. The z-score for a 95% confidence interval is approximately 1.96.

We can use the formula for the confidence interval:

$$\bar{x} \pm z \frac{\sigma}{\sqrt{n}}$$

Substituting the values we have:

$$170 \pm 1.96 \frac{10}{\sqrt{100}}$$

This simplifies to:

$$170 \pm 1.96$$

So, the 95% confidence interval for the population mean height is (168.04 cm, 171.96 cm).

This means that we are 95% confident that the true average height of the population is between 168.04 cm and 171.96 cm.

### Confidence interval consideration

There are a few more important points to note about confidence intervals and the Normal Distribution:

1. **Sample Size**: The width of the confidence interval decreases as the sample size increases. This is because as we collect more data, our estimate of the population parameter becomes more precise. In the formula for the confidence interval, the standard deviation is divided by the square root of the sample size, so as the sample size increases, the standard error (and hence the width of the confidence interval) decreases.

2. **Confidence Level**: The confidence level represents the uncertainty in our estimate. A higher confidence level will result in a wider confidence interval. This is because to be more confident that we have captured the true parameter, we need to allow for more variability. In the formula for the confidence interval, the z-score increases as the confidence level increases.

3. **Assumption of Normality**: The formula for the confidence interval that we used assumes that the population is normally distributed. If this assumption is not met, then the confidence interval may not be accurate. There are other methods to construct confidence intervals that do not require the assumption of normality.

4. **Interpretation**: The correct interpretation of a confidence interval is that if we were to take many samples and compute a confidence interval from each sample, then a certain percentage (the confidence level) of the intervals would contain the true population parameter. It is not correct to say that the confidence interval contains the population parameter with a certain probability, because the population parameter is a fixed value and does not vary.

5. **Outliers and Skewness**: The presence of outliers or skewness in the data can make the Normal Distribution a poor approximation, and hence make the confidence interval inaccurate. In such cases, a transformation of the data or a non-parametric method may be more appropriate.

6. **Central Limit Theorem**: Even if the population is not normally distributed, if the sample size is large enough, the distribution of the sample mean will be approximately Normal, according to the Central Limit Theorem. This allows us to use the Normal Distribution to construct confidence intervals even for non-normal populations, as long as the sample size is large enough (usually, n > 30 is considered sufficient).


### Hypothesis Testing
Hypothesis testing is a statistical method that is used in making statistical decisions using experimental data. It is basically an assumption that we make about the population parameter.

Hypothesis testing is a six-step procedure:

1. **Formulate the null hypothesis (H0)**: The null hypothesis is a statement about the population that either is believed to be true or is used to put forth an argument unless it can be shown to be incorrect beyond a reasonable doubt.

2. **Formulate the alternative hypothesis (H1)**: The alternative hypothesis is a claim about the population that is contradictory to H0 and what we conclude when we reject H0.

3. **Choose the significance level (α)**: The significance level is the probability that the test statistic will fall into the critical region when the null hypothesis is assumed. The usual significance level is 0.05 or 5%, which means your output should be 95% confident to give similar kind of result in each sample.

4. **Determine the critical region**: The critical region is the set of all values of the test statistic that cause us to reject the null hypothesis.

5. **Calculate the test statistic**: The test statistic is a mathematical formula that allows us to test the null hypothesis using our sample data.

6. **Make a decision**: Based on how the test statistic compares to the critical region, we either reject or fail to reject the null hypothesis.

The two main types of hypothesis tests are a 2-sample t-test and a z-test. A t-test is used when the population parameters (mean and standard deviation) are not known. A z-test is used when the population parameters are known.

The formula for a z-test is:

$$Z = \frac{(\bar{X} - \mu)}{\sigma/\sqrt{n}}$$

Where:
- $\bar{X}$ is the sample mean
- $\mu$ is the population mean
- $\sigma$ is the population standard deviation
- $n$ is the size of the sample

The formula for a t-test is similar, but it uses the sample standard deviation in the denominator instead of the population standard deviation:

$$t = \frac{(\bar{X} - \mu)}{s/\sqrt{n}}$$

Where $s$ is the sample standard deviation.

Hypothesis testing is a key tool in statistics and is used in both scientific research and business decision making.

### Hypothesis testing usage

Suppose we want to test whether the average height of people in a population is 170 cm. We take a sample of 100 people and measure their heights. The sample mean is 168 cm, and the sample standard deviation is 10 cm.

We want to test the null hypothesis that the population mean height is 170 cm, against the alternative hypothesis that the population mean height is not 170 cm. We use a 95% confidence level, so the significance level is 0.05.

The formula for a t-test is:

$$t = \frac{(\bar{X} - \mu)}{s/\sqrt{n}}$$

Substituting the values we have:

$$t = \frac{(168 - 170)}{10/\sqrt{100}}$$

This simplifies to:

$$t = -2$$

The critical region for a two-tailed test with a significance level of 0.05 is (-1.96, 1.96). Since the test statistic (-2) falls in the critical region, we reject the null hypothesis.

This means that we have sufficient evidence to conclude that the population mean height is not 170 cm.

### Hypothesis testing consideration

There are a few more important points to note about hypothesis testing and the Normal Distribution:

1. **Sample Size**: The larger the sample size, the more likely it is that the test statistic will fall in the critical region. This is because as the sample size increases, the standard error decreases, and hence the test statistic increases in magnitude.

### Normal distributions application
1. **Standard Normal Distribution Calculation**: Given that a set of data follows a standard normal distribution, calculate the probability that a randomly selected data point is less than 1.5.

>In a standard normal distribution, the mean is 0 and the standard deviation is 1. 
>The Z-score of a data point in a standard normal distribution is simply the data point's value. 
>So, in this case, we want to find the probability that a randomly selected data point (Z-score) is less than 1.5.  
>The probability that a randomly selected data point is less than a certain value in a standard normal distribution is given by the cumulative distribution function (CDF) for the standard normal distribution. 
>The CDF at a point x is denoted by $\Phi(x)$ and it gives the probability that a standard normal random variable takes a value less than x. 
>So, we want to find $\Phi(1.5)$. Using standard normal distribution tables or a calculator with a normal distribution function, we find that $\Phi(1.5) \approx 0.9332$.''

2. **Z-Score Calculation**: Given a normally distributed set of data with a mean of 100 and a standard deviation of 15, calculate the z-score for a data point of 130.

> In a standard normal distribution, the mean is 0 and the standard deviation is 1. The Z-score of a data point in a standard normal distribution is simply the data point's value. So, in this case, we want to find the probability that a randomly selected data point (Z-score) is less than 1.5.  The probability that a randomly selected data point is less than a certain value in a standard normal distribution is given by the cumulative distribution function (CDF) for the standard normal distribution. 
The CDF at a point x is denoted by $\Phi(x)$ and it gives the probability that a standard normal random variable takes a value less than x. So, we want to find $\Phi(1.5)$. Using standard normal distribution tables or a calculator with a normal distribution function, we find that $\Phi(1.5) \approx 0.9332$.


3. **Percentile Calculation**: Given a normally distributed set of data with a mean of 50 and a standard deviation of 10, find the 90th percentile.

4. **Probability Calculation**: Given a normally distributed set of data with a mean of 500 and a standard deviation of 100, calculate the probability that a randomly selected data point is between 400 and 600.

5. **Outlier Identification**: Given a normally distributed set of data with a mean of 30 and a standard deviation of 5, identify if a data point of 45 is an outlier.

6. **Confidence Interval Calculation**: Given a normally distributed set of data with a mean of 75 and a standard deviation of 8, calculate the 95% confidence interval.

7. **Sample Size Calculation**: Determine the sample size needed to estimate the population mean with a margin of error of 5, a standard deviation of 15, and a confidence level of 95%.

8. **Population Mean Estimation**: Given a sample of size 100 drawn from a normally distributed population with a known standard deviation of 20, and a sample mean of 105, estimate the population mean.

9. **Hypothesis Testing**: Given a sample of size 50 drawn from a normally distributed population with a known standard deviation of 10, a sample mean of 12, and a hypothesized population mean of 10, perform a hypothesis test at the 5% significance level.

10. **Central Limit Theorem Application**: Given a population with a mean of 100 and a standard deviation of 20, if you take samples of size 30, what is the probability that the sample mean is less than 95?

## Binomial Distribution

The binomial distribution is a probability distribution that describes the number of successes in a fixed number of independent Bernoulli trials each with the same probability of success. It is used when there are exactly two mutually exclusive outcomes of a trial, often referred to as success and failure. The binomial distribution is a tool that allows us to calculate probabilities of a certain number of successes given a set number of trials and the probability of success.

**Core Components of Binomial Distribution**

The binomial distribution is defined by two parameters: the number of trials $n$ and the probability of success $p$. 

1. **Number of trials ($n$)**: This is the number of independent experiments in the binomial distribution. 

2. **Probability of success ($p$)**: This is the probability of success on an individual trial.

The probability mass function of a binomial distribution is given by:

```math
P(X=k) = C(n, k) * (p^k) * ((1-p)^(n-k))
```

where:

- $P(X=k)$ is the probability of $k$ successes in $n$ trials
- $C(n, k)$ is the binomial coefficient, which can be calculated as $n! / [k!(n-k)!]$
- $p$ is the probability of success
- $1-p$ is the probability of failure
- $n$ is the number of trials
- $k$ is the number of successes

The mean and variance of a binomial distribution are given by:

- Mean ($\mu$): $np$
- Variance ($\sigma^2$): $np(1-p)$

**Understanding the Binomial Distribution**

The binomial distribution model deals with finding the probability of success of an event which has only two possible outcomes in a series of experiments. For example, tossing of a coin always gives a head or a tail. The probability of finding exactly 3 heads in tossing a coin repeatedly for 10 times is estimated during the binomial distribution.

We can plot the binomial distribution to visualize the probability of different outcomes. The distribution will be symmetric if the probability of success is 0.5, but will skew towards the right or left if the probability is different from 0.5.

![Binomial Distribution](https://upload.wikimedia.org/wikipedia/commons/7/75/Binomial_distribution_pmf.svg)

### Binomial distribution usage

**Example: Quality Control in Manufacturing**

Suppose a factory produces light bulbs, and the probability of producing a defective light bulb is 0.02 (i.e., 2% of the light bulbs are defective). If the factory produces 500 light bulbs in a day, what is the probability that:

1. Exactly 5 light bulbs are defective?
2. Between 5 and 10 light bulbs are defective?

**Solution**

1. To find the probability that exactly 5 light bulbs are defective, we can use the formula for the binomial distribution:

```math
P(X=5) = C(500, 5) * (0.02^5) * ((1-0.02)^(500-5))
```

2. To find the probability that between 5 and 10 light bulbs are defective, we need to sum the probabilities for each number of defective light bulbs from 5 to 10:

```math
P(5 <= X <= 10) = Σ P(X=k) for k=5 to 10
```

This would be calculated as:

```math
P(5 <= X <= 10) = P(X=5) + P(X=6) + P(X=7) + P(X=8) + P(X=9) + P(X=10)
```

Each of these probabilities can be calculated using the binomial distribution formula as we did for P(X=5).


### Binomial distribution consideration

There are a few additional points that are important to understand about the binomial distribution:

1. **Assumptions**: The binomial distribution assumes that each trial is independent, meaning the outcome of one trial does not affect the outcome of another trial. It also assumes a fixed number of trials and a constant probability of success on each trial.

2. **Binomial vs. Bernoulli**: The binomial distribution is the sum of outcomes of events that follow a Bernoulli distribution. A Bernoulli distribution has only two possible outcomes, namely 1 (success) and 0 (failure), and a single trial. So, the binomial distribution is the Bernoulli distribution summed over the number of trials.

3. **Normal Approximation**: For large values of $n$, and for $np$ and $n(1-p)$ both greater than 5, the binomial distribution can be approximated by the normal distribution. This is known as the De Moivre-Laplace theorem. The continuity correction can be used to improve the approximation.

4. **Use Cases**: The binomial distribution model is an important probability model that is used in many practical applications such as quality control, survey sampling, and forecasting. For example, it can be used to predict the number of wins a sports team might have in a season, or to model the number of sales a salesperson might make in a month.

5. **Computation**: While the formulas for the binomial distribution are relatively straightforward, the calculations can become quite complex when dealing with large numbers of trials or successes. Therefore, statistical software or calculators are often used to compute binomial probabilities.

6. **Related Distributions**: There are several other distributions related to the binomial distribution, including the geometric distribution (the number of trials needed to get the first success in repeated Bernoulli trials), the negative binomial distribution (the number of trials needed to get a specified number of successes), and the hypergeometric distribution (like the binomial distribution, but without replacement).

Remember, the binomial distribution is a discrete probability distribution. It models the number of successes in a fixed number of trials of a binary experiment. Each trial is assumed to be independent of the others.

#### Approximation of Binomial Distribution

The normal approximation is a simplification that allows us to use the normal distribution as an approximation of the binomial distribution when the number of trials is large. This is based on the Central Limit Theorem, which states that the sum of a large number of independent and identically distributed random variables will be approximately normally distributed.

**When to Use Normal Approximation**

The rule of thumb is that the normal approximation to the binomial distribution is appropriate when both $np \geq 5$ and $n(1-p) \geq 5$. Here, $n$ is the number of trials and $p$ is the probability of success on each trial.

**How to Use Normal Approximation**

When using the normal approximation to the binomial distribution, we use the same mean and variance as the binomial distribution. That is, the mean is $\mu = np$ and the variance is $\sigma^2 = np(1-p)$.

To find the probability of a range of outcomes using the normal approximation, we convert the binomial random variable to a standard normal random variable using the following formula:

```math
Z = (X - np) / sqrt(np(1-p))
```

where $Z$ is the standard normal random variable, $X$ is the binomial random variable, $np$ is the mean, and $sqrt(np(1-p))$ is the standard deviation.

**Continuity Correction**

When using the normal approximation to the binomial distribution, we often use a continuity correction to improve the approximation. This involves adding or subtracting 0.5 to the discrete $X$ value to find the corresponding range on the continuous normal distribution.

For example, to find $P(X \leq k)$ using the normal approximation, we would find $P(Z \leq k + 0.5)$. To find $P(X > k)$, we would find $P(Z > k + 0.5)$.

#### Example

Suppose we have a large group of 1000 people, and each person has a 30% chance of having a certain characteristic (for example, being left-handed). We want to know the probability that 290 or fewer people in the group are left-handed.

**Step 1: Check if Normal Approximation is Appropriate**

First, we need to check if we can use the normal approximation. We do this by checking if both $np$ and $n(1-p)$ are greater than or equal to 5. Here, $n$ is the number of people (1000), and $p$ is the probability of being left-handed (0.3).

So, $np = 1000 * 0.3 = 300$ and $n(1-p) = 1000 * 0.7 = 700$. Both of these are greater than 5, so we can use the normal approximation.

**Step 2: Use Continuity Correction**

Next, we use something called a continuity correction. This is because we're using the normal distribution (which is continuous) to approximate the binomial distribution (which is discrete). 

In this case, we want to find the probability that the number of left-handed people is *less than or equal to* 290. So, we add 0.5 to 290, giving us 290.5.

**Step 3: Convert to Z-Score**

Now, we convert our number of people (290.5) to a Z-score. The Z-score tells us how many standard deviations our value is from the mean. The formula for the Z-score is:

```math
Z = (X - np) / sqrt(np(1-p))
```

Here, $X$ is our number of people (290.5), $np$ is the mean (300), and $sqrt(np(1-p))$ is the standard deviation (sqrt(300 * 0.7) = sqrt(210) ≈ 14.49).

So, our Z-score is:

```math
Z = (290.5 - 300) / 14.49 ≈ -0.66
```

**Step 4: Find Probability**

Finally, we find the probability that corresponds to this Z-score. If we look up -0.66 in a standard normal distribution table (or use a calculator), we find that the probability is approximately 0.254. 

So, the probability that 290 or fewer people in the group are left-handed is approximately 0.254, or 25.4%.

## Exponential distributions
**Introduction to Exponential Distribution**

The Exponential Distribution is one of the widely used continuous probability distributions in statistics. It is often used to model the time elapsed between events that occur continuously and independently at a constant average rate. For example, it can be used to model the time between calls to a call center or the time until the failure of a machine part.

The Exponential Distribution is memoryless, meaning the past does not influence the future. In other words, if you are waiting for an event that follows an exponential distribution, the probability that the event occurs in the next unit of time is the same, regardless of how long you have already been waiting.

**Core Components of Exponential Distribution**

The Exponential Distribution has a single parameter, $\lambda$, which is the rate parameter. It represents the average number of events per unit of time. The higher the rate, the more frequently events occur and the shorter the waiting time between events.

The probability density function (PDF) of the Exponential Distribution is given by:

```math
f(x; \lambda) = \lambda e^{-\lambda x} for x >= 0, and 0 otherwise
```

Where:
- $x$ is the time elapsed
- $\lambda$ is the rate parameter
- $e$ is the base of the natural logarithm, approximately equal to 2.71828

The cumulative distribution function (CDF), which gives the probability that the time until the next event is less than or equal to $x$, is given by:

```math
F(x; \lambda) = 1 - e^{-\lambda x} for x >= 0, and 0 otherwise
```

The mean and variance of the Exponential Distribution are given by:

```math
Mean = 1/\lambda
Variance = 1/\lambda^2
```

The Exponential Distribution is often used because of its simplicity and the fact that it only has one parameter. This makes it relatively easy to work with compared to other distributions.

### Exponential distribution usage

Suppose a call center receives an average of 12 calls per hour. We can model the time between calls using an Exponential Distribution. In this case, the rate parameter $\lambda$ is 12 calls per hour.

**Question 1:** What is the probability that the next call will come within the next 5 minutes?

To answer this, we first need to convert our rate parameter and time to the same units. Since our rate is in calls per hour and our time is in minutes, let's convert 12 calls per hour to calls per minute by dividing by 60. So, $\lambda = 12/60 = 0.2$ calls per minute.

We can then use the cumulative distribution function (CDF) to find the probability that the time until the next call (X) is less than or equal to 5 minutes:

```math
P(X <= 5) = F(5; 0.2) = 1 - e^{-0.2 * 5}
```

Calculate the value of $e^{-0.2 * 5}$ and subtract it from 1 to get the probability.

**Question 2:** What is the expected time until the next call?

The expected time until the next call is given by the mean of the Exponential Distribution, which is $1/\lambda$. Remembering that our rate parameter is in calls per minute, the expected time until the next call is:

```math
Mean = 1/0.2 = 5 minutes
```

So, on average, we expect the next call to come in 5 minutes.

This example illustrates how the Exponential Distribution can be used to model the time between events in a process that occurs continuously and independently at a constant average rate.
